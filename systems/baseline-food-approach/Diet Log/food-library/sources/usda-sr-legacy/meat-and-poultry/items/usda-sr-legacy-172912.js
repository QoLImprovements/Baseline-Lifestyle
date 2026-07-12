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
  "id": "usda-sr-legacy-172912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 529.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "CAMPBELL'S CHUNKY, Old Fashioned Vegetable Beef Soup",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 6.24,
    "energy_kcal": 49.0,
    "fat_g": 1.23,
    "fibre_g": 1.3,
    "folate_ug": 0.0,
    "iron_mg": 0.54,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 163.0,
    "protein_g": 3.16,
    "salt_g": 0.865,
    "sat_fat_g": 0.408,
    "sodium_mg": 346.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 2600.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172912",
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
