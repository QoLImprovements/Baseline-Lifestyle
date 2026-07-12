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
  "id": "usda-sr-legacy-174073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 527.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Soup, beef barley, ready to serve",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 7.94,
    "energy_kcal": 52.0,
    "fat_g": 0.96,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 0.45,
    "magnesium_mg": 9.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 50.0,
    "potassium_mg": 121.0,
    "protein_g": 2.81,
    "salt_g": 0.7425,
    "sat_fat_g": 0.329,
    "sodium_mg": 297.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174073",
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
