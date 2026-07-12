/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "packet-6-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.1,
      "key": "packet-6-fl-oz",
      "kind": "unit",
      "label": "packet (6 fl oz)"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Soup, chicken noodle, dry, mix",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 62.3,
    "energy_kcal": 1580.0,
    "fat_g": 6.51,
    "fibre_g": 3.2,
    "folate_ug": 71.0,
    "iron_mg": 2.44,
    "magnesium_mg": 38.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 195.0,
    "potassium_mg": 306.0,
    "protein_g": 15.4,
    "salt_g": 7.9,
    "sat_fat_g": 1.97,
    "sodium_mg": 3160.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171571",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "meat-and-poultry",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
