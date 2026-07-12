/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-172925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, chicken noodle, dry, mix, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 3.67,
    "energy_kcal": 23.0,
    "fat_g": 0.55,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.2,
    "magnesium_mg": 3.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 12.0,
    "potassium_mg": 13.0,
    "protein_g": 0.84,
    "salt_g": 0.5725,
    "sat_fat_g": 0.122,
    "sodium_mg": 229.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172925",
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
