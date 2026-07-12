/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-4-tbsp-or-1-envelope",
  "description": "Beverages",
  "id": "usda-sr-legacy-174864",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "serving-4-tbsp-or-1-envelope",
      "kind": "unit",
      "label": "serving (4 tbsp or 1 envelope)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "individual-serving-4-5-heaping-tsp-or-1-envelope",
      "kind": "unit",
      "label": "individual serving (4-5 heaping tsp or 1 envelope)"
    }
  ],
  "name": "Beverages, OVALTINE, Classic Malt powder",
  "nutritionPerBasis": {
    "calcium_mg": 909.0,
    "carbs_g": 93.3,
    "energy_kcal": 1560.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 16.4,
    "magnesium_mg": 218.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 1.59,
    "sat_fat_g": 0.0,
    "sodium_mg": 636.0,
    "sugar_g": 63.6,
    "vitamin_a_ug": 1360.0,
    "vitamin_c_mg": 54.5,
    "vitamin_e_mg": 12.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174864",
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
