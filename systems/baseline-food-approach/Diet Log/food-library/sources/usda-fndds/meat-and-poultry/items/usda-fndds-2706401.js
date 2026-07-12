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
  "id": "usda-fndds-2706401",
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
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Sweet and sour pork",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 25.5,
    "energy_kcal": 260.0,
    "fat_g": 13.6,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 3.07,
    "magnesium_mg": 13.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 133.0,
    "potassium_mg": 152.0,
    "protein_g": 8.88,
    "salt_g": 0.76,
    "sat_fat_g": 2.68,
    "sodium_mg": 304.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 27.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706401",
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
