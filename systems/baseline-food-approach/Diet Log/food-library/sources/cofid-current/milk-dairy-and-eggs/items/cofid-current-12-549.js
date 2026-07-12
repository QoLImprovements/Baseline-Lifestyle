/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Including Dairylea Light Slices, Kerry Low Low Cheesy Slices for Burgers and other/own brands",
  "id": "cofid-current-12-549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, processed, slices, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 642.0,
    "carbs_g": 9.7,
    "energy_kcal": 190.0,
    "fat_g": 9.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.27,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 513.0,
    "potassium_mg": 148.0,
    "protein_g": 16.7,
    "salt_g": 2.025,
    "sat_fat_g": 5.85,
    "sodium_mg": 810.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-549",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
