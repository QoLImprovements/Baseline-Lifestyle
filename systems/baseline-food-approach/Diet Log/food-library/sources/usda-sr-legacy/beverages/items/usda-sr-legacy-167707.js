/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "tsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-167707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Beverages, fruit-flavored drink, powder, with high vitamin C with other added vitamins, low calorie",
  "nutritionPerBasis": {
    "calcium_mg": 800.0,
    "carbs_g": 91.0,
    "energy_kcal": 951.0,
    "fat_g": 0.16,
    "fibre_g": 2.2,
    "folate_ug": 5.0,
    "iron_mg": 0.08,
    "magnesium_mg": 245.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 493.0,
    "potassium_mg": 2520.0,
    "protein_g": 0.25,
    "salt_g": 0.035,
    "sat_fat_g": 0.01,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6000.0,
    "vitamin_c_mg": 2400.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167707",
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
