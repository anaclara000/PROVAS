package viewers;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Currency;
import java.util.Locale;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import controllers.OrcamentoProcess;
import models.Orcamento;


public class OrcamentoForm extends JFrame{
	
	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel text ,Lfiltro, id, fornecedor, produto, preco, lbfundo;
	private JComboBox cbproduto;
	private JTextField tffiltro, tfid, tffornecedor, tfpreco;
	private DefaultTableModel tableModel;
	private JButton filtro, create, read, update, delete;
	private JTable table;
	private JScrollPane rolagem;
	private String imgIco = ".\\assets\\icon.png";
	private String [] fundo = {".\\assets\\fundo.png"};
	private ImageIcon icon;
	
	private int autoId = OrcamentoProcess.orcamentos.get(OrcamentoProcess.orcamentos.size() - 1).getId() + 1;
	private DecimalFormat df = new DecimalFormat("#.00");
	private final Locale BRASIL = new Locale("pt", "BR");
	
	OrcamentoForm(){
		setTitle("Regitro de Or�amento");
		setBounds(100, 100, 610, 410);
		painel = new JPanel();
		setContentPane(painel);
		setIconImage(new ImageIcon(imgIco).getImage());
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		
		text = new JLabel("Consulta de or�amentos");
		text.setBounds(170, 5, 400, 30);
		text.setFont(new Font("OpenSans",Font.CENTER_BASELINE,20));
		text.setForeground(new Color(0,0,0));
		painel.add(text);
		
		id = new JLabel("ID:");
		id.setBounds(20, 35, 120, 30);
		id.setFont(new Font("OpenSans",Font.LAYOUT_LEFT_TO_RIGHT,13));
		tfid = new JTextField(String.format("%d", autoId));
		tfid.setEditable(false);
		tfid.setEditable(false);
		tfid.setBounds(50, 35, 250, 30);
		tfid.setBackground(new Color(215, 215, 215));
		
		fornecedor = new JLabel("Fornecedor:");
		fornecedor.setBounds(20, 70, 120, 30);
		tffornecedor = new JTextField();
		fornecedor.setFont(new Font("OpenSans",Font.LAYOUT_LEFT_TO_RIGHT,13));
		tffornecedor.setBounds(100, 70, 200, 30);
		tffornecedor.setBackground(new Color(215, 215, 215));
		
		produto = new JLabel("Produto:");
		produto.setBounds(20, 105, 120, 30);
		produto.setFont(new Font("OpenSans",Font.LAYOUT_LEFT_TO_RIGHT,13));
		cbproduto = new JComboBox<String>(new String[] {"SSD", "HD", "Placa m�e" , "Processador", "Placa de video"});
		cbproduto.setFont(new Font("OpenSans",Font.LAYOUT_LEFT_TO_RIGHT,13));
		cbproduto.setBounds(80, 105, 220, 30);
		cbproduto.setBackground(new Color(215, 215, 215));
//		
		preco = new JLabel("Pre�o:");
		preco.setBounds(20, 140, 80, 30);
		preco.setFont(new Font("OpenSans",Font.LAYOUT_LEFT_TO_RIGHT,13));
		tfpreco = new JTextField();
		tfpreco.setBounds(80, 140, 220, 30);
		tfpreco.setBackground(new Color(215, 215, 215));
		
		lbfundo = new JLabel("");
		lbfundo.setBounds(380, 15, 150, 170);
		fundo(0);
		painel.add(lbfundo);
		
//		Lfiltro = new JLabel("Produto:");
//		tffiltro = new JTextField();
//		filtro = new JButton("Filtrar");
//		Lfiltro.setBounds(20, 340, 300, 15);
//		tffiltro.setBounds(20, 310, 100, 20);
//		Lfiltro.setBounds(115, 310, 100, 20);
//		filtro.setBounds(305, 310, 100, 30);
//		painel.add(Lfiltro);
//		painel.add(tffiltro);
//		painel.add(filtro);
		
		painel.add(id);
		painel.add(tfid);
		painel.add(fornecedor);
		painel.add(tffornecedor);
		painel.add(produto);
		painel.add(cbproduto);
		painel.add(preco);
		painel.add(tfpreco);
		
		table = new JTable();
		tableModel = new DefaultTableModel();
		tableModel.addColumn("Id");
		tableModel.addColumn("Fornecedor");
		tableModel.addColumn("Produto");
		tableModel.addColumn("Preco");
		tableModel.addColumn("Status");
		
		
		if (OrcamentoProcess.orcamentos.size() != 1) {
			preencherTabela();
		}
		table = new JTable(tableModel);
		table.setEnabled(false);
		rolagem = new JScrollPane(table);
		rolagem.setBounds(20, 220, 550, 130);
		painel.add(rolagem);
		
		create = new JButton("Cadastrar");
		create.setBounds(60, 180, 110, 30);
		painel.add(create);

		read = new JButton("Buscar");
		read.setBounds(180, 180, 110, 30);
		painel.add(read);

		update = new JButton("Alterar");
		update.setBounds(300, 180, 110, 30);
		update.setEnabled(false);
		painel.add(update);

		delete = new JButton("Excluir");
		delete.setBounds(420, 180, 110, 30);

		delete.setEnabled(false);
		painel.add(delete);
		
		create.addActionListener((ActionListener) new ActionListener() {
        	@Override
        	public void actionPerformed(ActionEvent e) {
        		cadastrar();
        	}
        });
		read.addActionListener((ActionListener) new ActionListener() {
        	@Override
        	public void actionPerformed(ActionEvent e) {
        		buscar();
        	}
        });
		update.addActionListener((ActionListener) new ActionListener() {
        	@Override
        	public void actionPerformed(ActionEvent e) {
        		alterar();
        	}
        });
		delete.addActionListener((ActionListener) new ActionListener() {
        	@Override
        	public void actionPerformed(ActionEvent e) {
        		excluir();
        	}
        });
		
//		filtro.addActionListener((ActionListener) new ActionListener() {
//        	@Override
//        	public void actionPerformed(ActionEvent e) {
//        		filtrarProdutos(filtro);
//        	}
//        });
//		
	}
	
	int obterEquipamento(String equipamento) {
		switch (equipamento) {
		case "SSD":
			return 0;
		case "HD":
			return 1;
		case "Placa m�e":
			return 2;
		case "Processador":
			return 3;
		case "Placa de video":
			return 4;
		default:
			return -1;
		}
	}
	
	private void fundo (int indice) {
		icon = new ImageIcon(new ImageIcon(fundo[indice]).getImage().getScaledInstance(160, 160, 50));
		lbfundo.setIcon(icon);
	}

	private void cadastrar() {
	if(tfid.getText().length() != 0 && tffornecedor.getText().length() != 0 && tfpreco.getText().length() != 0) {
		
		df.setCurrency(Currency.getInstance(BRASIL));
		double preco;
		try {
			preco = Double.parseDouble(df.parse(tfpreco.getText()).toString());
		} catch (ParseException e) {
			System.out.println(e);
			preco = 0;
		}

		OrcamentoProcess.orcamentos.add(new Orcamento(autoId,  tffornecedor.getText(),
				cbproduto.getSelectedItem().toString(), preco, false));
		autoId = OrcamentoProcess.orcamentos.get(OrcamentoProcess.orcamentos.size() - 1).getId() + 1;
		preencherTabela();
		limparCampos();
		OrcamentoProcess.salvar();
		comparar();
		
	}else {
		JOptionPane.showMessageDialog(this, "Favor preencher todos os campos.");
	}
}
	
	private void buscar() {
		String text = JOptionPane.showInputDialog(this, "Digite o id do item");
		try {
			int id = Integer.parseInt(text);
			
			for (Orcamento o : OrcamentoProcess.orcamentos) {
				if (o.getId() == id) {
					int indice = OrcamentoProcess.orcamentos.indexOf(o);
			tfid.setText(String.format("%d", OrcamentoProcess.orcamentos.get(indice).getId()));
			tffornecedor.setText(OrcamentoProcess.orcamentos.get(indice).getFornecedor());
			cbproduto.setSelectedIndex(obterEquipamento(OrcamentoProcess.orcamentos.get(indice).getProduto()));
			tfpreco.setText((String.format("%.2f" , OrcamentoProcess.orcamentos.get(indice).getPreco())));
			
			create.setEnabled(false);
			update.setEnabled(true);
			delete.setEnabled(true);
			OrcamentoProcess.salvar();
					}
				}
			} catch (Exception e) {
		JOptionPane.showMessageDialog(this, "Id inv�lido!", "Erro", JOptionPane.ERROR_MESSAGE);
	}
	
}
	
	private void alterar() {
		int id = Integer.parseInt(tfid.getText());
		Orcamento o = new Orcamento(id);
		int indice = OrcamentoProcess.orcamentos.indexOf(o);
		if (tfid.getText().length() != 0 && tffornecedor.getText().length() != 0 &&  tfpreco.getText().length() != 0)  {
			Orcamento tempOrca = new Orcamento(Integer.parseInt(tfid.getText()), tffornecedor.getText(), cbproduto.getSelectedItem().toString(),(Double.parseDouble(tfpreco.getText().replace(",", "."))), false);
			for (Orcamento o1 : OrcamentoProcess.orcamentos) {
				if (o1.getId() == tempOrca.getId()) {
					o1.setId(tempOrca.getId());
					o1.setFornecedor(tempOrca.getFornecedor());
					o1.setProduto(tempOrca.getProduto());
					o1.setPreco(tempOrca.getPreco());
				
				}
			}
			df.setCurrency(Currency.getInstance(BRASIL));
			double preco;
			try {
				preco = Double.parseDouble(df.parse(tfpreco.getText()).toString());
			} catch (ParseException e) {
				System.out.println(e);
				preco = 0;
			}

				preencherTabela();
				limparCampos();
				OrcamentoProcess.salvar();
				
				create.setEnabled(true);
				update.setEnabled(false);
				delete.setEnabled(false);
				tfid.setText(String.format("%d", autoId));
				OrcamentoProcess.salvar();
				comparar();
			
		} else {
			JOptionPane.showMessageDialog(this, "Favor Preencher todas as informa��es");
		}
	}
	
	private void limparCampos() {
		tfid.setText(String.format("%d",autoId));
		tffornecedor.setText(null);
		cbproduto.setSelectedIndex(0);
		tfpreco.setText(null);

	}

	private void preencherTabela() {
		int totLinhas = tableModel.getRowCount();
		if (tableModel.getRowCount() > 0) {
			for (int i = 0; i < totLinhas; i++) {
				tableModel.removeRow(0);
			}
		}
		for (Orcamento o : OrcamentoProcess.orcamentos) {
			OrcamentoProcess.calculo(o.getProduto());
		}
		for (Orcamento o : OrcamentoProcess.orcamentos) {
			if (o.isMaisBarato()) {
				tableModel.addRow(new String[] { String.format("%d", o.getId()), o.getFornecedor(), o.getProduto(),String.format("%.2f", o.getPreco()), "Mais barato"});
			} else {
				tableModel.addRow(new String[] { String.format("%d", o.getId()), o.getFornecedor(), o.getProduto(),String.format("%.2f", o.getPreco()), "-"});
			}
			
		}
	}
	
		
	
	public void comparar() {
		for (Orcamento orcamento : OrcamentoProcess.orcamentos) {
			OrcamentoProcess.calculo(orcamento.getProduto());
		}
	}


	private void excluir() {
		if (JOptionPane.showConfirmDialog(this, "Tem certeza que deseja EXCLUIR esse Produto?") == 0) {
			Orcamento prodTemp = null;
			for (Orcamento o : OrcamentoProcess.orcamentos) {
				if (o.getId() == Integer.parseInt(tfid.getText())) {
					prodTemp = o;
				}
			}

			OrcamentoProcess.orcamentos.remove(OrcamentoProcess.orcamentos.indexOf(prodTemp));

			preencherTabela();
			limparCampos();
			OrcamentoProcess.salvar();

			create.setEnabled(true);
			update.setEnabled(false);
			delete.setEnabled(false);
			comparar();
		}
	}

	
//	private ArrayList<Orcamento> filtrarProdutos(String filtro) {
//		ArrayList<Orcamento> orcamentos = new ArrayList<>();
//		if (filtro.equals("")) {
//			return OrcamentoProcess.orcamentos;
//		} else {
//			if (filtro.length() > 0)
//				for (Orcamento o : OrcamentoProcess.orcamentos) {
//					if (filtro.contains(String.format("%d", o.getId()))
//							|| o.getFornecedor().toUpperCase().contains(filtro.toUpperCase())
//							|| o.getProduto().toUpperCase().contains(filtro.toUpperCase())
//							|| filtro.contains(String.format("%d", o.getPreco())))
//						orcamentos.add(o);
//				}
//		}
//		return orcamentos;
//	}

	
		public void actionPerformed(ActionEvent e) {
			if (e.getSource() == create) {
				cadastrar();
			}
			if (e.getSource() == read) {
				buscar();
			}
			if (e.getSource() == update) {
				alterar();
			}
			if (e.getSource() == delete) {
				excluir();
			}
//			if (e.getSource() == filtro) {
//				filtrarProdutos();
//			}
		}
		
		
		public static void main(String[] agrs) throws ParseException {
			OrcamentoProcess.abrir();
			new OrcamentoForm().setVisible(true);
		}
	}

