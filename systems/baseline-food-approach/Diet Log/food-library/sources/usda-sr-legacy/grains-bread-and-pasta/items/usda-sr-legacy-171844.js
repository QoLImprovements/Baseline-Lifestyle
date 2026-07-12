/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Bread, chapati or roti, plain, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 46.4,
    "energy_kcal": 297.0,
    "fat_g": 7.45,
    "fibre_g": 4.9,
    "folate_ug": 61.0,
    "iron_mg": 3.01,
    "magnesium_mg": 62.0,
    "omega3_g": 0.129,
    "phosphorus_mg": 184.0,
    "potassium_mg": 266.0,
    "protein_g": 11.2,
    "salt_g": 1.0225,
    "sat_fat_g": 1.95,
    "sodium_mg": 409.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171844",
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
