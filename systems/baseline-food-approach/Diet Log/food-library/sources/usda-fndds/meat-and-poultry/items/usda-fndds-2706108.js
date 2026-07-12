/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-diced-cooked",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-small-or-thin-slice",
      "kind": "unit",
      "label": "1 small or thin slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-boneless-cooked",
      "kind": "unit",
      "label": "1 oz, boneless, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    }
  ],
  "name": "Turkey, light meat, breaded, baked or fried, skin eaten",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 6.48,
    "energy_kcal": 200.0,
    "fat_g": 6.84,
    "fibre_g": 0.4,
    "folate_ug": 17.0,
    "iron_mg": 1.09,
    "magnesium_mg": 32.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 228.0,
    "potassium_mg": 241.0,
    "protein_g": 26.8,
    "salt_g": 0.495,
    "sat_fat_g": 1.88,
    "sodium_mg": 198.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706108",
  "state": "Baked",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "baked",
    "meat-and-poultry",
    "turkey-duck-other-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
