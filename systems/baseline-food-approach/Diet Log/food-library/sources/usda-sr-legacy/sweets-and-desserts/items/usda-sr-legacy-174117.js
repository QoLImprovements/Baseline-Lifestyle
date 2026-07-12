/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cup",
  "description": "Beverages",
  "id": "usda-sr-legacy-174117",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving 2 tbsp"
    }
  ],
  "name": "Beverages, chocolate syrup",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 65.1,
    "energy_kcal": 1170.0,
    "fat_g": 1.13,
    "fibre_g": 2.6,
    "folate_ug": 2.0,
    "iron_mg": 2.11,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 224.0,
    "protein_g": 2.1,
    "salt_g": 0.18,
    "sat_fat_g": 0.519,
    "sodium_mg": 72.0,
    "sugar_g": 49.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174117",
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
