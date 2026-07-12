/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "serving-1-3-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171608",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "serving-1-3-cup",
      "kind": "unit",
      "label": "serving 1/3 cup"
    }
  ],
  "name": "Potato soup, instant, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 76.1,
    "energy_kcal": 1440.0,
    "fat_g": 3.1,
    "fibre_g": 7.6,
    "folate_ug": 61.0,
    "iron_mg": 2.38,
    "magnesium_mg": 62.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 279.0,
    "potassium_mg": 1250.0,
    "protein_g": 9.2,
    "salt_g": 6.0,
    "sat_fat_g": 0.613,
    "sodium_mg": 2400.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 13.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171608",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
