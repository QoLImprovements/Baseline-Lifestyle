/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706794",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "General Tso chicken",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 24.0,
    "energy_kcal": 295.0,
    "fat_g": 16.4,
    "fibre_g": 0.9,
    "folate_ug": 11.0,
    "iron_mg": 1.16,
    "magnesium_mg": 18.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 127.0,
    "potassium_mg": 201.0,
    "protein_g": 12.9,
    "salt_g": 1.0875,
    "sat_fat_g": 2.76,
    "sodium_mg": 435.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 38.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706794",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "meat-and-poultry",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
