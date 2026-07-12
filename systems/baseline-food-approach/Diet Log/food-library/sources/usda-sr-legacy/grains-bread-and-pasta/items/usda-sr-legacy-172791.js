/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "sheet-dough",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172791",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "sheet-dough",
      "kind": "unit",
      "label": "sheet dough"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Phyllo dough",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 52.6,
    "energy_kcal": 1250.0,
    "fat_g": 6.0,
    "fibre_g": 1.9,
    "folate_ug": 88.0,
    "iron_mg": 3.21,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 74.0,
    "protein_g": 7.1,
    "salt_g": 1.2075,
    "sat_fat_g": 1.47,
    "sodium_mg": 483.0,
    "sugar_g": 0.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172791",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
