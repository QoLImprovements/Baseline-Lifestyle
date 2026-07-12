/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-33-cup",
  "description": "Beverages",
  "id": "usda-sr-legacy-173180",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    }
  ],
  "name": "Beverages, Protein powder whey based",
  "nutritionPerBasis": {
    "calcium_mg": 469.0,
    "carbs_g": 6.25,
    "energy_kcal": 1470.0,
    "fat_g": 1.56,
    "fibre_g": 3.1,
    "folate_ug": 33.0,
    "iron_mg": 1.13,
    "magnesium_mg": 195.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1320.0,
    "potassium_mg": 500.0,
    "protein_g": 78.1,
    "salt_g": 0.39,
    "sat_fat_g": 0.781,
    "sodium_mg": 156.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173180",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
