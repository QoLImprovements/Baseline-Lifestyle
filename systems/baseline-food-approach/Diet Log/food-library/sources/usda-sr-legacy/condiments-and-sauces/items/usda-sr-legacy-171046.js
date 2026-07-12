/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "2-tbsp-1-nlea-serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "2-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "2 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Dressing, honey mustard, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 38.4,
    "energy_kcal": 705.0,
    "fat_g": 1.47,
    "fibre_g": 1.2,
    "folate_ug": 9.0,
    "iron_mg": 0.36,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 69.0,
    "protein_g": 1.07,
    "salt_g": 2.5,
    "sat_fat_g": 0.349,
    "sodium_mg": 1000.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171046",
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
