/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-2-chicken-breast-with-sauce",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-2-chicken-breast-with-sauce",
      "kind": "unit",
      "label": "1/2 chicken breast with sauce"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Almond chicken",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.46,
    "energy_kcal": 195.0,
    "fat_g": 13.2,
    "fibre_g": 1.2,
    "folate_ug": 16.0,
    "iron_mg": 0.82,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 243.0,
    "protein_g": 15.7,
    "salt_g": 0.825,
    "sat_fat_g": 1.92,
    "sodium_mg": 330.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 11.8,
    "vitamin_e_mg": 3.15,
    "vitamin_k_ug": 13.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706797",
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
