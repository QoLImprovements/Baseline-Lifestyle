/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "packet",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171560",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 3.6,
      "key": "cube",
      "kind": "unit",
      "label": "cube"
    }
  ],
  "name": "Soup, beef broth or bouillon, powder, dry",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 17.4,
    "energy_kcal": 893.0,
    "fat_g": 8.89,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 1.0,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 320.0,
    "potassium_mg": 446.0,
    "protein_g": 16.0,
    "salt_g": 65.0,
    "sat_fat_g": 4.32,
    "sodium_mg": 26000.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171560",
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
