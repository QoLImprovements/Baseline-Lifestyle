/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-without-flavor-packet",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "package-without-flavor-packet",
      "kind": "unit",
      "label": "package without flavor packet"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Soup, ramen noodle, chicken flavor, dry",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 60.2,
    "energy_kcal": 1840.0,
    "fat_g": 17.5,
    "fibre_g": 2.9,
    "folate_ug": 118.0,
    "iron_mg": 4.21,
    "magnesium_mg": 25.0,
    "omega3_g": 0.056,
    "phosphorus_mg": 115.0,
    "potassium_mg": 183.0,
    "protein_g": 10.2,
    "salt_g": 4.8,
    "sat_fat_g": 8.1,
    "sodium_mg": 1920.0,
    "sugar_g": 1.96,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171615",
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
