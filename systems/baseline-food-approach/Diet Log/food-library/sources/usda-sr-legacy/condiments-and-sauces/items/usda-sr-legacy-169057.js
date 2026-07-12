/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-169057",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, green goddess, regular",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 7.36,
    "energy_kcal": 1790.0,
    "fat_g": 43.3,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.35,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 58.0,
    "protein_g": 1.9,
    "salt_g": 2.1675,
    "sat_fat_g": 5.98,
    "sodium_mg": 867.0,
    "sugar_g": 6.67,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 4.6,
    "vitamin_k_ug": 96.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169057",
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
