/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-individual-container",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
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
    }
  ],
  "name": "Soup, split pea, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 9.1,
    "energy_kcal": 80.0,
    "fat_g": 2.42,
    "fibre_g": 3.3,
    "folate_ug": 28.0,
    "iron_mg": 0.65,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 201.0,
    "protein_g": 5.57,
    "salt_g": 0.62,
    "sat_fat_g": 0.745,
    "sodium_mg": 248.0,
    "sugar_g": 1.81,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707458",
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
