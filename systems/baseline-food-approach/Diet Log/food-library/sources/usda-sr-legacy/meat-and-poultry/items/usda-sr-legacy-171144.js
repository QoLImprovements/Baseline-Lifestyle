/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 546.0,
      "key": "can-19-25-oz",
      "kind": "unit",
      "label": "can (19.25 oz)"
    }
  ],
  "name": "Soup, bean with ham, canned, chunky, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 11.2,
    "energy_kcal": 95.0,
    "fat_g": 3.5,
    "fibre_g": 4.6,
    "folate_ug": 12.0,
    "iron_mg": 1.33,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 175.0,
    "protein_g": 5.19,
    "salt_g": 1.0,
    "sat_fat_g": 1.37,
    "sodium_mg": 400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171144",
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
