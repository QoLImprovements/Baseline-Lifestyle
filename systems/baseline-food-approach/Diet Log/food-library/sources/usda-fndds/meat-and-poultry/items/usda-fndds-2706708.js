/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, dumplings, and vegetables including carrots, broccoli, and/or dark green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 11.6,
    "energy_kcal": 127.0,
    "fat_g": 6.64,
    "fibre_g": 0.9,
    "folate_ug": 20.0,
    "iron_mg": 0.92,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 109.0,
    "protein_g": 5.59,
    "salt_g": 0.86,
    "sat_fat_g": 1.29,
    "sodium_mg": 344.0,
    "sugar_g": 1.11,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706708",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
