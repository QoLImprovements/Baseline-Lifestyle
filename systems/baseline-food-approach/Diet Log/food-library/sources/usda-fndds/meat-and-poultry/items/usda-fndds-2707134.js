/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    }
  ],
  "name": "Soup, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.04,
    "energy_kcal": 40.0,
    "fat_g": 1.14,
    "fibre_g": 0.8,
    "folate_ug": 11.0,
    "iron_mg": 0.23,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 40.0,
    "potassium_mg": 151.0,
    "protein_g": 3.44,
    "salt_g": 0.6225,
    "sat_fat_g": 0.268,
    "sodium_mg": 249.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707134",
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
