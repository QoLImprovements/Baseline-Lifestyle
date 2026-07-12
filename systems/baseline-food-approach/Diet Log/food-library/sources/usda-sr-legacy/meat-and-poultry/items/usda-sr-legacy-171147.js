/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "0-5-cup-4-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    }
  ],
  "name": "Soup, chicken gumbo, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.67,
    "energy_kcal": 45.0,
    "fat_g": 1.14,
    "fibre_g": 1.6,
    "folate_ug": 5.0,
    "iron_mg": 0.71,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 60.0,
    "protein_g": 2.1,
    "salt_g": 1.7325,
    "sat_fat_g": 0.26,
    "sodium_mg": 693.0,
    "sugar_g": 1.93,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171147",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
