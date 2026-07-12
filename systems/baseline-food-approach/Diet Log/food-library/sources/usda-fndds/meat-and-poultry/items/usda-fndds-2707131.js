/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-can",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707131",
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
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
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
  "name": "Soup, pork or ham",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 4.04,
    "energy_kcal": 48.0,
    "fat_g": 2.17,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.32,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 152.0,
    "protein_g": 3.14,
    "salt_g": 0.6175,
    "sat_fat_g": 0.711,
    "sodium_mg": 247.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707131",
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
