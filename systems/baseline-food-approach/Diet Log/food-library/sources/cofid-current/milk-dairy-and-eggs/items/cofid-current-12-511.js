/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Ben & Jerry's, Haagen-Dazs and own brands",
  "id": "cofid-current-12-511",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, dairy, luxury, with chocolate/caramel",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 32.2,
    "energy_kcal": 262.0,
    "fat_g": 13.9,
    "fibre_g": 1.3,
    "folate_ug": 4.0,
    "iron_mg": 1.41,
    "magnesium_mg": 27.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 110.0,
    "potassium_mg": 249.0,
    "protein_g": 4.2,
    "salt_g": 0.1875,
    "sat_fat_g": 8.97,
    "sodium_mg": 75.0,
    "sugar_g": 28.4,
    "vitamin_a_ug": 148.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-511",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
