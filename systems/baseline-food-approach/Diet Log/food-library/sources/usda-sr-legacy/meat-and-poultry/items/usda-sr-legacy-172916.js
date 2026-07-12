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
  "id": "usda-sr-legacy-172916",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 614.0,
      "key": "can-11-5-oz-prepared",
      "kind": "unit",
      "label": "can (11.5 oz), prepared"
    }
  ],
  "name": "Soup, pea, split with ham, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.0,
    "energy_kcal": 75.0,
    "fat_g": 1.74,
    "fibre_g": 0.9,
    "folate_ug": 1.0,
    "iron_mg": 0.9,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 158.0,
    "protein_g": 4.08,
    "salt_g": 0.995,
    "sat_fat_g": 0.7,
    "sodium_mg": 398.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172916",
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
