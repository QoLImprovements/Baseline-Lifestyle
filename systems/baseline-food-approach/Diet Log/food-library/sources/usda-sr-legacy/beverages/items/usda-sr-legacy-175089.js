/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-3-heaping-tsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-175089",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "serving-3-heaping-tsp",
      "kind": "unit",
      "label": "serving (3 heaping tsp)"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, tea, instant, lemon, sweetened, powder",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 98.6,
    "energy_kcal": 1680.0,
    "fat_g": 0.73,
    "fibre_g": 0.7,
    "folate_ug": 1.0,
    "iron_mg": 0.21,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 169.0,
    "protein_g": 0.12,
    "salt_g": 0.0125,
    "sat_fat_g": 0.097,
    "sodium_mg": 5.0,
    "sugar_g": 95.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175089",
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
