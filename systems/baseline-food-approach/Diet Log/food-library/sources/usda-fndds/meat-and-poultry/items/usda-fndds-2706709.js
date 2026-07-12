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
  "id": "usda-fndds-2706709",
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
  "name": "Chicken or turkey, dumplings, and vegetables excluding carrots, broccoli, and dark green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 12.8,
    "energy_kcal": 128.0,
    "fat_g": 6.22,
    "fibre_g": 0.8,
    "folate_ug": 19.0,
    "iron_mg": 0.92,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 115.0,
    "protein_g": 5.65,
    "salt_g": 0.85,
    "sat_fat_g": 1.24,
    "sodium_mg": 340.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706709",
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
