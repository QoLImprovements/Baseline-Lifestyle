/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "packet",
  "description": "Beverages",
  "id": "usda-sr-legacy-171893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Beverages, coffee, instant, regular, powder",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 75.4,
    "energy_kcal": 353.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.41,
    "magnesium_mg": 327.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 303.0,
    "potassium_mg": 3540.0,
    "protein_g": 12.2,
    "salt_g": 0.0925,
    "sat_fat_g": 0.197,
    "sodium_mg": 37.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171893",
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
