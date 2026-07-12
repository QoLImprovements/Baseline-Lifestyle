/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Dairy and Egg Products",
  "id": "usda-foundation-329370",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, mozzarella, low moisture, part-skim",
  "nutritionPerBasis": {
    "calcium_mg": 693.0,
    "carbs_g": 4.44,
    "energy_kcal": 1240.0,
    "fat_g": 20.4,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 0.2,
    "magnesium_mg": 27.2,
    "omega3_g": 0.093,
    "phosphorus_mg": 533.0,
    "potassium_mg": 116.0,
    "protein_g": 23.7,
    "salt_g": 1.7475,
    "sat_fat_g": 11.7,
    "sodium_mg": 699.0,
    "sugar_g": 1.81,
    "vitamin_a_ug": 203.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "329370",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
