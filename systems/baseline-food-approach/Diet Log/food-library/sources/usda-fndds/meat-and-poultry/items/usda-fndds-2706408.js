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
  "id": "usda-fndds-2706408",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-pork-chop-with-sauce",
      "kind": "unit",
      "label": "1 pork chop with sauce"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pork or ham with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.35,
    "energy_kcal": 190.0,
    "fat_g": 12.7,
    "fibre_g": 0.5,
    "folate_ug": 8.0,
    "iron_mg": 0.82,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 295.0,
    "protein_g": 14.9,
    "salt_g": 0.8525,
    "sat_fat_g": 2.78,
    "sodium_mg": 341.0,
    "sugar_g": 1.05,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 22.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706408",
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
