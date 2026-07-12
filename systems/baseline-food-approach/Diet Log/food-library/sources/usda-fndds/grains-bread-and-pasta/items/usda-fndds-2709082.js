/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709082",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "1-cup-beef-flavor",
      "kind": "unit",
      "label": "1 cup, beef flavor"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup-chicken-flavor",
      "kind": "unit",
      "label": "1 cup, chicken flavor"
    }
  ],
  "name": "Flavored rice and pasta mixture",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 19.1,
    "energy_kcal": 118.0,
    "fat_g": 3.49,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.66,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 30.0,
    "potassium_mg": 37.0,
    "protein_g": 2.68,
    "salt_g": 0.6375,
    "sat_fat_g": 0.705,
    "sodium_mg": 255.0,
    "sugar_g": 0.18,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709082",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "grains-bread-and-pasta",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
