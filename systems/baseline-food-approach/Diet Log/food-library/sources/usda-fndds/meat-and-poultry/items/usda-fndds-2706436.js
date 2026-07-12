/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-nugget",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706436",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-nugget",
      "kind": "unit",
      "label": "1 nugget"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sweet and sour chicken or turkey, without vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 23.9,
    "energy_kcal": 250.0,
    "fat_g": 12.6,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 2.12,
    "magnesium_mg": 15.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 135.0,
    "potassium_mg": 158.0,
    "protein_g": 10.1,
    "salt_g": 0.615,
    "sat_fat_g": 1.93,
    "sodium_mg": 246.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 22.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706436",
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
