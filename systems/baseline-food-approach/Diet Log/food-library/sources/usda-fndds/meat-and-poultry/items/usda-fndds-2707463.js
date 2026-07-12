/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    }
  ],
  "name": "Soup, lentil, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.76,
    "energy_kcal": 78.0,
    "fat_g": 2.3,
    "fibre_g": 3.2,
    "folate_ug": 69.0,
    "iron_mg": 1.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 89.0,
    "potassium_mg": 204.0,
    "protein_g": 5.94,
    "salt_g": 0.6225,
    "sat_fat_g": 0.726,
    "sodium_mg": 249.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707463",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "meat-and-poultry",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
