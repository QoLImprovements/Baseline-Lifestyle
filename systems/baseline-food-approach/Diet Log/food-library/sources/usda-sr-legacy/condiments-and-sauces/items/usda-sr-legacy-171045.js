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
  "id": "usda-sr-legacy-171045",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "2-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "2 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Salad dressing, caesar, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 30.7,
    "energy_kcal": 131.0,
    "fat_g": 0.23,
    "fibre_g": 0.2,
    "folate_ug": 2.0,
    "iron_mg": 0.29,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 48.0,
    "protein_g": 1.47,
    "salt_g": 3.15,
    "sat_fat_g": 0.096,
    "sodium_mg": 1260.0,
    "sugar_g": 8.82,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171045",
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
