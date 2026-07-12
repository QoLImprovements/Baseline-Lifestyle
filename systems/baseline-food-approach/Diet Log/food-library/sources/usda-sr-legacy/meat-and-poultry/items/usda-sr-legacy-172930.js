/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tbsp",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172930",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pate, liver, not specified, canned",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 1.5,
    "energy_kcal": 1340.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 60.0,
    "iron_mg": 5.5,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 138.0,
    "protein_g": 14.2,
    "salt_g": 1.7425,
    "sat_fat_g": 9.57,
    "sodium_mg": 697.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 991.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172930",
  "state": "Canned",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "canned",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
