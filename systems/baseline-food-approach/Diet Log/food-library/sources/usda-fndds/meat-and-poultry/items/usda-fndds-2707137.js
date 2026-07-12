/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-can",
  "description": "Soups, cream-based",
  "id": "usda-fndds-2707137",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Soup, cream of chicken",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 6.79,
    "energy_kcal": 91.0,
    "fat_g": 5.42,
    "fibre_g": 0.9,
    "folate_ug": 15.0,
    "iron_mg": 0.4,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 50.0,
    "potassium_mg": 167.0,
    "protein_g": 4.0,
    "salt_g": 0.6275,
    "sat_fat_g": 2.7,
    "sodium_mg": 251.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707137",
  "state": "Unspecified",
  "subcategory": "Soups, cream-based",
  "tags": [
    "meat-and-poultry",
    "soups-cream-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
