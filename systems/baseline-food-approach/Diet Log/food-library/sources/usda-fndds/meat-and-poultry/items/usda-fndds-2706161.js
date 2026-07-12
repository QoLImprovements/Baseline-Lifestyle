/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Liver and organ meats",
  "id": "usda-fndds-2706161",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-slice-5-x-2-x-1",
      "kind": "unit",
      "label": "1 slice (5\" x 2\" x 1\")"
    }
  ],
  "name": "Tongue pot roast, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.32,
    "energy_kcal": 317.0,
    "fat_g": 25.0,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 2.94,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 206.0,
    "protein_g": 21.0,
    "salt_g": 3.1,
    "sat_fat_g": 8.96,
    "sodium_mg": 1240.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706161",
  "state": "Unspecified",
  "subcategory": "Liver and organ meats",
  "tags": [
    "liver-and-organ-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
