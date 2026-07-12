/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "11 samples, 5 products, including Magnum, Galaxy",
  "id": "cofid-current-12-510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream bars/choc ices, chocolate coated, luxury",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 34.9,
    "energy_kcal": 336.0,
    "fat_g": 21.1,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.2,
    "magnesium_mg": 27.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 119.0,
    "potassium_mg": 250.0,
    "protein_g": 3.9,
    "salt_g": 0.16,
    "sat_fat_g": 14.21,
    "sodium_mg": 64.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 502.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-510",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
