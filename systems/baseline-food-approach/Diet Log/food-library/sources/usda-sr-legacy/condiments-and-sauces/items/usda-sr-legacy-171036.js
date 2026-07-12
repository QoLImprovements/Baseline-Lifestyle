/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "serving-approximately-10-sprays",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "serving-approximately-10-sprays",
      "kind": "unit",
      "label": "serving (approximately 10 sprays)"
    }
  ],
  "name": "Salad dressing, spray-style dressing, assorted flavors",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 16.6,
    "energy_kcal": 690.0,
    "fat_g": 10.8,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.18,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.16,
    "salt_g": 2.75,
    "sat_fat_g": 1.64,
    "sodium_mg": 1100.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 347.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171036",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "condiments-and-sauces",
    "fats-and-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
