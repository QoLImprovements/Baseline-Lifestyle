/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "packet-prepared",
  "description": "Beverages",
  "id": "usda-sr-legacy-173164",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 103.0,
      "key": "packet-prepared",
      "kind": "unit",
      "label": "packet prepared"
    },
    {
      "gramsPerUnit": 29.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Alcoholic beverage, whiskey sour, prepared with water, whiskey and powder mix",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 15.8,
    "energy_kcal": 684.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.08,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 4.0,
    "protein_g": 0.1,
    "salt_g": 0.1175,
    "sat_fat_g": 0.003,
    "sodium_mg": 47.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173164",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
