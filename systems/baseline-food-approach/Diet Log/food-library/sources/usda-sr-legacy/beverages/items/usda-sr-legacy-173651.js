/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "can",
  "description": "Beverages",
  "id": "usda-sr-legacy-173651",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 424.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 35.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, Orange-flavor drink, breakfast type, with pulp, frozen concentrate.",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 42.9,
    "energy_kcal": 172.0,
    "fat_g": 0.5,
    "fibre_g": 0.2,
    "folate_ug": 30.0,
    "iron_mg": 0.26,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 435.0,
    "protein_g": 0.1,
    "salt_g": 0.06,
    "sat_fat_g": 0.078,
    "sodium_mg": 24.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 243.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173651",
  "state": "Frozen",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
