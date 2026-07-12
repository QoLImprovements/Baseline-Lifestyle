/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-tbsp",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 Tbsp"
    }
  ],
  "name": "Sauce, duck, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 60.7,
    "energy_kcal": 245.0,
    "fat_g": 0.13,
    "fibre_g": 0.6,
    "folate_ug": 2.0,
    "iron_mg": 0.39,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 87.0,
    "protein_g": 0.36,
    "salt_g": 1.78,
    "sat_fat_g": 0.051,
    "sodium_mg": 712.0,
    "sugar_g": 30.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171823",
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
