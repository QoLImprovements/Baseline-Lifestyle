/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp",
  "description": "Beverages",
  "id": "usda-sr-legacy-174824",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Beverages, chocolate powder, no sugar added",
  "nutritionPerBasis": {
    "calcium_mg": 909.0,
    "carbs_g": 68.3,
    "energy_kcal": 1460.0,
    "fat_g": 4.5,
    "fibre_g": 9.1,
    "folate_ug": 7.0,
    "iron_mg": 3.27,
    "magnesium_mg": 410.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 500.0,
    "potassium_mg": 1700.0,
    "protein_g": 9.09,
    "salt_g": 1.25,
    "sat_fat_g": 0.0,
    "sodium_mg": 500.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 54.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174824",
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
