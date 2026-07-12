/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-microwavable-package-prepared",
  "description": "Macaroni and cheese",
  "id": "usda-fndds-2708815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 321.0,
      "key": "1-large-microwavable-package-prepared",
      "kind": "unit",
      "label": "1 large microwavable package, prepared"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "1-microwavable-tub-regular-size-prepared",
      "kind": "unit",
      "label": "1 microwavable tub, regular size, prepared"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 423.0,
      "key": "1-large-microwavable-tub-prepared",
      "kind": "unit",
      "label": "1 large microwavable tub, prepared"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-microwavable-package-regular-size-prepared",
      "kind": "unit",
      "label": "1 microwavable package, regular size, prepared"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Macaroni or noodles with cheese, Easy Mac type",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 20.1,
    "energy_kcal": 110.0,
    "fat_g": 1.86,
    "fibre_g": 0.5,
    "folate_ug": 41.0,
    "iron_mg": 0.67,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 99.0,
    "protein_g": 3.26,
    "salt_g": 0.6475,
    "sat_fat_g": 0.799,
    "sodium_mg": 259.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708815",
  "state": "Unspecified",
  "subcategory": "Macaroni and cheese",
  "tags": [
    "macaroni-and-cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
