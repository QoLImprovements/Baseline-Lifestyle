/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "slice-regular",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "slice-regular",
      "kind": "unit",
      "label": "slice, regular"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "slice-large",
      "kind": "unit",
      "label": "slice, large"
    }
  ],
  "name": "Bread, rye, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 53.1,
    "energy_kcal": 1190.0,
    "fat_g": 3.6,
    "fibre_g": 6.4,
    "folate_ug": 103.0,
    "iron_mg": 3.1,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 183.0,
    "protein_g": 9.4,
    "salt_g": 1.66,
    "sat_fat_g": 0.688,
    "sodium_mg": 664.0,
    "sugar_g": 4.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172685",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
