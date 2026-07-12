/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Beef Products",
  "id": "usda-sr-legacy-168618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 417.0,
      "key": "steak",
      "kind": "unit",
      "label": "steak"
    }
  ],
  "name": "Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8\" fat, choice, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.0,
    "energy_kcal": 923.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 3.16,
    "magnesium_mg": 23.0,
    "omega3_g": 0.034,
    "phosphorus_mg": 224.0,
    "potassium_mg": 290.0,
    "protein_g": 27.6,
    "salt_g": 0.1675,
    "sat_fat_g": 4.41,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168618",
  "state": "Grilled",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
