/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706134",
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
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-nugget",
      "kind": "unit",
      "label": "1 nugget"
    }
  ],
  "name": "Turkey, nuggets",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 17.1,
    "energy_kcal": 236.0,
    "fat_g": 8.66,
    "fibre_g": 1.1,
    "folate_ug": 31.0,
    "iron_mg": 1.7,
    "magnesium_mg": 30.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 207.0,
    "potassium_mg": 217.0,
    "protein_g": 22.2,
    "salt_g": 0.835,
    "sat_fat_g": 2.26,
    "sodium_mg": 334.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706134",
  "state": "Unspecified",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "turkey-duck-other-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
