/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-4-tbsp-or-1-envelope",
  "description": "Beverages",
  "id": "usda-sr-legacy-173222",
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
      "gramsPerUnit": 78.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beverages, OVALTINE, chocolate malt powder",
  "nutritionPerBasis": {
    "calcium_mg": 909.0,
    "carbs_g": 93.0,
    "energy_kcal": 372.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 16.4,
    "magnesium_mg": 218.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 1.325,
    "sat_fat_g": 0.0,
    "sodium_mg": 530.0,
    "sugar_g": 72.7,
    "vitamin_a_ug": 1360.0,
    "vitamin_c_mg": 54.5,
    "vitamin_e_mg": 12.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173222",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
