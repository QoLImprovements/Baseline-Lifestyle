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
  "id": "usda-sr-legacy-174075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Bread, chapati or roti, whole wheat, commercially prepared, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 46.1,
    "energy_kcal": 1250.0,
    "fat_g": 9.2,
    "fibre_g": 9.7,
    "folate_ug": 45.0,
    "iron_mg": 2.2,
    "magnesium_mg": 56.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 158.0,
    "potassium_mg": 196.0,
    "protein_g": 7.85,
    "salt_g": 0.745,
    "sat_fat_g": 3.31,
    "sodium_mg": 298.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174075",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
